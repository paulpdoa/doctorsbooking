import { useState } from 'react';

export const Services = () => {

    const [specialties,setSpecialties] = useState([
        {
            name: 'Primary care & General Medicine',
            photo: 'https://static.nowserving.ph/specialties/primary-care-and-general-medicine.png'
        },
        {
            name: 'OB-GYN\'s & Women\'s Health',
            photo: 'https://static.nowserving.ph/specialties/ob-gyn-and-womens-health.png'
        },
        {
            name: 'Pediatrics',
            photo: 'https://static.nowserving.ph/specialties/pediatrics.png'
        },
        {
            name: 'Diabetes & Endocrinology',
            photo: 'https://static.nowserving.ph/specialties/diabetes-and-endocrinology.png'
        },
        {
            name: 'Eye & Vision Doctor',
            photo: 'https://static.nowserving.ph/specialties/eye-and-vision-doctor.png'
        },
        {
            name: 'Heart & Cardiology',
            photo: 'https://static.nowserving.ph/specialties/heart-and-cardiology.png'
        },
        {
            name: 'Skin & Dermatology',
            photo: 'https://static.nowserving.ph/specialties/skin-and-dermatology.png'
        },
        {
            name: 'Lungs, Chest & Pulmonology',
            photo: 'https://static.nowserving.ph/specialties/lungs-chest-and-pulmonology.png'
        },
        {
            name: 'Stomach, Digestion & Gastroentrology',
            photo: 'https://static.nowserving.ph/specialties/internal-medicine.png'
        },
        {
            name: 'Ears, Nose & Throat',
            photo: 'https://static.nowserving.ph/specialties/ears-nose-and-throat.png'
        },
        {
            name: 'Kidney & Urine',
            photo: 'https://static.nowserving.ph/specialties/kidney-and-urine.png'
        },
        {
            name: 'Brain & Nerves',
            photo: 'https://static.nowserving.ph/specialties/brain-and-nerves.png'
        }
    ]);

    return (
        <>
        <div className="px-5 py-20 w-full flex flex-col items-center">
            <div className="flex items-center justify-between w-4/5">
                <div>
                    <h1 className="text-3xl">Top Specialties</h1>
                    <p className="text-lg text-gray-500">People have been looking for these specialties.</p>
                </div>
                <button className="p-2 rounded-full bg-gray-100 text-blue-500 font-semibold uppercase">View all</button>
            </div>

            <div className="grid grid-cols-4 gap-5 w-4/5 py-5">
                { specialties?.map((specialty,key) => (
                    <div className="shadow-xl rounded-lg p-5" key={key}>
                        <img className="object-contain" src={specialty.photo} alt={specialty.name} />
                        <p className="text-sm text-center">{specialty.name}</p>
                    </div>
                )) } 
            </div>
        </div>
        <div className="px-5 py-20 w-full flex flex-col items-center">
            <div className="flex items-center justify-between w-4/5">
                <div>
                    <h1 className="text-3xl">Top Specialties</h1>
                    <p className="text-lg text-gray-500">People have been looking for these specialties.</p>
                </div>
                <button className="p-2 rounded-full bg-gray-100 text-blue-500 font-semibold uppercase">View all</button>
            </div>

            <div className="grid grid-cols-4 gap-5 w-4/5 py-5">
                { specialties?.map((specialty,key) => (
                    <div className="shadow-xl rounded-lg p-5" key={key}>
                        <img className="object-contain" src={specialty.photo} alt={specialty.name} />
                        <p className="text-sm text-center">{specialty.name}</p>
                    </div>
                )) } 
            </div>
        </div>
        <div className="px-5 py-20 w-full flex flex-col items-center">
            <div className="flex items-center justify-between w-4/5">
                <div>
                    <h1 className="text-3xl">Top Specialties</h1>
                    <p className="text-lg text-gray-500">People have been looking for these specialties.</p>
                </div>
                <button className="p-2 rounded-full bg-gray-100 text-blue-500 font-semibold uppercase">View all</button>
            </div>

            <div className="grid grid-cols-4 gap-5 w-4/5 py-5">
                { specialties?.map((specialty,key) => (
                    <div className="shadow-xl rounded-lg p-5" key={key}>
                        <img className="object-contain" src={specialty.photo} alt={specialty.name} />
                        <p className="text-sm text-center">{specialty.name}</p>
                    </div>
                )) } 
            </div>
        </div>
        </>
    )
}