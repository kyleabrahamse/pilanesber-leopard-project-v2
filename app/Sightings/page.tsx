"use client";
import SightingsCard from "../components/SightingsCard";
import { useEffect, useState } from "react";

// Firebase
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, storage } from "../Firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

type Sighting = {
  name: string;
  location: string;
  id: string;
  time: string;
  description: string;
  imageUrl?: string;
};

type Sightings = Sighting[];

export default function Sightings() {
  const colRef = collection(db, "sighting");
  const [sightings, setSightings] = useState<Sightings>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    time: "",
    description: "",
    image: null as File | null,
  });

  // delete document
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "sighting", id));
      console.log(doc(db, "sighting", id));
      setSightings((prevSightings) =>
        prevSightings.filter((sighting) => sighting.id !== id),
      );
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };
 
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
          imageUrl: doc.data().imageUrl,
        }));
        setSightings(sightingsData);
        console.log(sightings);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  console.log(sightings);

  // Submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { name, location, time, description, image } = formData;

      let imageUrl = "";
      if (image) {
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadResult = await uploadBytes(storageRef, image);
        imageUrl = await getDownloadURL(uploadResult.ref);
      }

      await addDoc(colRef, {
        name,
        location,
        time,
        description,
        imageUrl,
      });
      
      // Update state
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

      // Reset form data after submission
      setFormData({
        name: "",
        location: "",
        time: "",
        description: "",
        image: null,
      });
      setIsLoading(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({
      ...formData,
      image: file,
    });
  };

  return (
    <div className="flex gap-20 bg-alabaster">
      <div className="mb-10 h-screen w-1/2 overflow-y-auto">
        {sightings.map((info) => {
          return (
            <SightingsCard
              key={info.id}
              name={info.name}
              id={info.id}
              location={info.location}
              time={info.time}
              description={info.description}
              imageUrl={info.imageUrl}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
      <div className="w-1/2 pt-10">
        <form className="flex w-8/12 flex-col gap-2" onSubmit={handleSubmit}>
          <p>Which leopard was seen?</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <p>Location</p>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
          <p>When was it seen?</p>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
          />
          <p>Description</p>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
          <button
            type="submit"
            className="mr-5 mt-5 w-1/3 rounded-lg bg-earth px-6 py-2 text-2xl font-medium hover:bg-tigerseye"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
