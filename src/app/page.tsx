/*import Image from "next/image";*/
/*import LikeButton from './like-button'*/
/*import Link from 'next/link'*/ 
'use client';
import { useState } from 'react'

/* className="flex flex-col min-h-screen" */
export default function Home() {

  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    weight: '',
    height: '',
    activity: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData(true);
  }

  return (
    <div className="grid grid-rows-6 items-center justify-items-center min-h-screen pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="container w-2/4 pb-0">
      <form className="flex flex-col bg-white items-center justify-center p-4" onSubmit={handleSubmit}>
        <h1 className="text-purple-800 font-bold text-2xl p-2">Learn How Many Calories You Burn Every Day</h1>
        <p className="text-sm"><b>Use the Simple TDEE calculator to learn your Total Daily Energy Expenditure</b>, a measure of how many calories you
        burn per day. This calorie calculator will also display your BMI, BMR, Macros & many other useful statistics!</p>
        <div>
        <label className="text-sm font-bold">Gender</label>
        <select name="gender" className="border-2 border-gray-300 rounded-1g p-1 m-2 w-20"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="male">male</option>
          <option value="female">female</option>
          </select>
        </div>
        <div>
        <label className="text-sm font-bold">Age</label>
        <input
          className="border-2 border-gray-300 rounded-1g p-2 m-2 w-20"
          type='text'
          name='age'
          placeholder=''
          value={formData.age}
          onChange={handleChange}
        />
        </div>
        <div>
        <label className="text-sm font-bold">Weight</label>
        <input
          className="border-2 border-gray-300 rounded-1g p-2 m-2 w-20"
          type='weight'
          name='weight'
          value={formData.weight}
          onChange={handleChange}
        />
        </div>
        <div>
        <label className="text-sm font-bold">Height</label>
          <select name="height" className="border-2 border-gray-300 rounded-1g p-1 m-2 w-20"
            value={formData.height}
            onChange={handleChange}
          >
          <option value="4'7">4ft 7in</option>
          <option value="4'8">4ft 8in</option>
          <option value="4'9">4ft 9in</option>
          <option value="4'10">4ft 10in</option>
          <option value="4'11">4ft 11in</option>
          <option value="5'0">5ft 0in</option>
          <option value="5'1">5ft 1in</option>
          <option value="5'2">5ft 2in</option>
          <option value="5'3">5ft 3in</option>
          <option value="5'4">5ft 4in</option>
          <option value="5'5">5ft 5in</option>
          <option value="5'6">5ft 6in</option>
          <option value="5'7">5ft 7in</option>
          <option value="5'8">5ft 8in</option>
          <option value="5'9">5ft 9in</option>
          <option value="5'10">5ft 10in</option>
          <option value="5'11">5ft 11in</option>
          <option value="6'0">6ft 0in</option>
          <option value="6'1">6ft 1in</option>
          <option value="6'2">6ft 2in</option>
          <option value="6'3">6ft 3in</option>
          <option value="6'4">6ft 4in</option>
          <option value="6'5">6ft 5in</option>
          <option value="6'6">6ft 6in</option>
          <option value="6'7">6ft 7in</option>
          <option value="6'8">6ft 8in</option>
          <option value="6'9">6ft 9in</option>
          <option value="6'10">6ft 10in</option>
          <option value="6'11">6ft 11in</option>
          <option value="7'0">7ft 0in</option>
          </select>
        </div>
        <div>
        <label className="text-sm font-bold">Activity</label>
          <select name="activity" className="border-2 border-gray-300 rounded-1g p-1 m-2 w-48"
            value={formData.activity}
            onChange={handleChange}
          >
          <option value="chooseoption">Choose option</option>
          <option value="sedentary">Sedentary (office job)</option>
          <option value="light">Light Exercise (1-2 days/week)</option>
          <option value="moderate">Moderate Exercise (3-5 days/week)</option>
          <option value="heavy">Heavy Exercise (6-7 days/week)</option>
          <option value="athlete">Athlete (2x per day)</option>
          </select>
        </div>
        <button className="border-1 text-xl bg-purple-800 rounded-full p-1 m-4 w-40 text-white"
          type='submit'
          onClick={() => setSubmitted(true)}
        >
          Calculate!
        </button>
      </form>
      <div className="container pt-6">
      <div>
        <h1 className="text-purple-800 font-bold text-2xl p-2">How TDEE Is Calculated</h1>
        <p className="text-sm">
        Your Total Daily Energy Expenditure (TDEE) is an estimation of how many calories you burn per 
        day when exercise is taken into account. It is calculated by first figuring out your Basal Metabolic Rate, 
        then multiplying that value by an activity multiplier. Since your BMR represents how many calories 
        your body burns when at rest, it is necessary to adjust the numbers upwards to account for the calories 
        you burn during the day. This is true even for those with a sedentary lifestyle. Our TDEE calculator uses 
        the best formulas and displays your score in a way that's easy to read and meaningful.
        </p>
      </div>
    </div>
    <div className="container pt-6">
      {submitted && (
      <div>
        <h1>Your results will populate here:</h1>
        <p>Gender: {formData.gender}</p>
        <p>Age: {formData.age}</p>
        <p>Weight: {formData.weight}</p>
        <p>Height: {formData.height}</p>
        <p>Activity: {formData.activity}</p>
      </div>
      )}
    </div>
    </div>
  </div>
  );
}
