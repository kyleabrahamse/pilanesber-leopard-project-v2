"use client";
import SightingsCard from "../components/SightingsCard";
import { useEffect, useState } from "react";

// Firebase
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, storage } from "../Firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface Sighting {
  name: string;
  location: string;
  id: string;
  time: string;
  description: string;
  imageUrl?: string
}

type Sightings = Sighting[];

export default function Sightings() {
  const colRef = collection(db, "sighting");
  const [sightings, setSightings] = useState<Sightings>([]);
  // get collection data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(colRef);
        const sightingsData: Sightings = snapshot.docs.map((doc) => ({
          name: doc.data().name,
          location: doc.data().location,
          time: doc.data().time,
          description: doc.data().description,
          id: doc.id,
        }));
        setSightings(sightingsData);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  console.log(sightings);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const location = formData.get("location") as string;
    const time = formData.get("time") as string;
    const description = formData.get("description") as string;
    const imageFile = formData.get("image") as File;

    // Upload the image file to Firebase Storage
    let imageUrl = "";
    if (imageFile) {
      const storageRef = ref(storage, `images/${imageFile.name}`);
      const uploadResult = await uploadBytes(storageRef, imageFile);
      imageUrl = await getDownloadURL(uploadResult.ref);
    }

    try {
      addDoc(colRef, {
        name,
        location,
        time,
        description,
      });

      setSightings((prevSightings) => [
        ...prevSightings,
        {
          name,
          location,
          time,
          description,
          id: colRef.id,
          imageUrl,
        },
      ]);
      e.currentTarget.reset();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex gap-20 bg-alabaster">
      <div className="mb-10 h-screen w-1/2 overflow-y-auto">
        {sightings.map((info) => {
          return (
            <SightingsCard
              key={info.id}
              name={info.name}
              location={info.location}
              time={info.time}
              description={info.description}
              imageUrl={info.imageUrl}
            />
          );
        })}
      </div>
      <div className="w-1/2 pt-10">
        <form className="flex w-8/12 flex-col gap-2" onSubmit={handleSubmit}>
          <p>Which leopard was seen?</p>
          <input type="text" name="name" />
          <p>Location</p>
          <input type="text" name="location" />
          <p>When was it seen?</p>
          <input type="text" name="time" />
          <p>Description</p>
          <textarea name="description"></textarea>
          <input type="file" name="image" accept="image/*" />
          <button
            type="submit"
            className="mr-5 mt-5 w-1/3 rounded-lg bg-earth px-6 py-2 text-2xl font-medium hover:bg-tigerseye"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
