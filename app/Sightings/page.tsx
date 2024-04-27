"use client";
import SightingsCard from "../components/SightingsCard";
import { useEffect, useState } from "react";

// Firebase
import { collection, getDocs, addDoc } from "firebase/firestore";
import {db, storage }from "../Firebase/firebase";

interface Sighting {
  name: string;
  location: string;
  id: string;
  time: string;
  description: string;
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

    try {
      addDoc(colRef, {
        name,
        location,
        time,
        description,
      });

      setSightings((prevSightings) => [...prevSightings, {
        name,
        location,
        time,
        description,
        id: colRef.id
      }]);
      e.currentTarget.reset();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex gap-20 bg-alabaster">
      <div className="w-1/2 h-screen overflow-y-auto mb-10">
        {sightings.map((info) => {
          return (
            <SightingsCard
              key={info.id}
              name={info.name}
              location={info.location}
              time={info.time}
              description={info.description}
            />
          );
        })}
      </div>
      <div className="w-1/2 pt-10">
        <form className="flex w-8/12 flex-col" onSubmit={handleSubmit}>
          <p>Which leopard was seen?</p>
          <input type="text" name="name"/>
          <p>Location</p>
          <input type="text" name="location" />
          <p>When was it seen?</p>
          <input type="text" name="time" />
          <p>Description</p>
          <textarea name="description"></textarea>
          <button type="submit" className="mt-5 w-1/3 bg-earth mr-5 rounded-lg px-6 py-2 text-2xl font-medium hover:bg-tigerseye">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
