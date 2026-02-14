import React, { useEffect, useState } from "react";
import Navbar from "../componets/NavBar";
import RateLimitedUI from "../componets/RateLimitedComponent";
import toast from "react-hot-toast";
import NoteCard from "../componets/NoteCard";
import api from "../lib/axios";
import NoteNotFound from "../componets/NoteNotFound";

const HomePage = () => {
  const [isRatelimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error finding data", error);
        if (error.response && error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      {isRatelimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {Loading && 
          <div className="text-center text-primary py-10">Loading Notes...</div>
        }
        {notes.length === 0 && !isRatelimited && <NoteNotFound />}

        {notes.length > 0 && !isRatelimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
