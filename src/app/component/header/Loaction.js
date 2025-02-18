"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "@/firebase/FirebaseConfig";


const database = getDatabase(app);

const LocationCom = () => {
    const [location, setLocation] = useState({ lat: 22.7948058, lng: 91.1065366 }); // Default Location
    const mapRef = useRef(null);
    const inputRef = useRef(null);
    const markerRef = useRef(null); // ✅ মার্কারের জন্য রেফারেন্স

    useEffect(() => {
        const locationRef = ref(database, "ambulance/location");

        onValue(locationRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                console.log(data);
                setLocation({ lat: data.latitude, lng: data.longitude });

                // ✅ যদি মার্কার থাকে, তার পজিশন আপডেট করো
                if (markerRef.current) {
                    markerRef.current.setPosition({ lat: data.latitude, lng: data.longitude });
                }
            }
        });
    }, []);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://maps.gomaps.pro/maps/api/js?key=AlzaSyxmW3tjPJP92PFoWMJYR7-viNAE6Iz3Z3v&libraries=geometry,places&callback=initMap";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        window.initMap = () => {
            if (!mapRef.current) return;

            // 🌍 Google Map তৈরি
            const mapInstance = new window.google.maps.Map(mapRef.current, {
                center: location,
                zoom: 13,
            });

            // ✅ মার্কার তৈরি করা
            markerRef.current = new window.google.maps.Marker({
                position: location,
                map: mapInstance,
                title: "Ambulance Location 🚑",
                animation: window.google.maps.Animation.DROP
            });

            // ✅ Autocomplete সেটআপ
            const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
            autocomplete.bindTo("bounds", mapInstance);

            // ✅ Autocomplete এর জন্য ইভেন্ট লিসনার
            autocomplete.addListener("place_changed", () => {
                const place = autocomplete.getPlace();
                if (!place.geometry) {
                    console.log("No details available for the input: '" + place.name + "'");
                    return;
                }

                if (place.geometry.viewport) {
                    mapInstance.fitBounds(place.geometry.viewport);
                } else {
                    mapInstance.setCenter(place.geometry.location);
                    mapInstance.setZoom(17);
                }

                // ✅ নতুন লোকেশনে মার্কার সরানো
                setLocation({
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                });

                markerRef.current.setPosition(place.geometry.location);
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, [location]);

    return (
        <div className="bg-gray-100  py-10 px-5 md:px-0">
            <div className="mx-auto max-w-screen-lg">
                <h1 className="text-xl font-bold  my-5" >Live Loaction</h1>
            <div className="relative w-full h-[400px] ">
                {/* 🚑 Running Ambulance */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[300px] sm:w-[250px] lg:w-[400px] z-30">
                    <Image
                        src="/images/ambulace.png"
                        alt="Ambulance"
                        width={100}
                        height={100}
                        className="animate-ambulance"
                    />
                </div>

                {/* 🗺️ Google Map (Full Width) */}
                <div ref={mapRef} id="map" className="w-full h-full"></div>
            </div>



        </div>
        </div>
    );
};

export default LocationCom;
