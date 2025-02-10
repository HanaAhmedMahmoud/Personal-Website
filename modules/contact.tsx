'use client';
import {m_plus_1, poltawski} from '@/app/fonts';
import clsx from 'clsx';
import {useSearchParams} from 'next/navigation';
import {useState} from 'react';

export default function Contact() {
  const searchParams = useSearchParams();
  const contactClickedParam = searchParams.get('contactClicked');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('Error message set up');

  async function submit() {
    if (formData.name && formData.email && formData.message) {
      console.log(formData.name + formData.email + formData.message);
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          setErrorMessage('Email sent successfully');
          setFormData({name: '', email: '', message: ''});
        } else {
          setErrorMessage('Error sending email: ' + result.error);
        }
      } catch {
        setErrorMessage('Something went wrong. Please try again.');
      }
    } else {
      setErrorMessage('Please double-check your entries.');
    }
  }

  return (
    <div
      className={` ${
        contactClickedParam ? 'visible opacity-100' : 'invisible opacity-0'
      } 
	 fixed inset-0 flex items-center justify-center z-50 duration-200`}
    >
      <div
        className="w-full h-full z-10 bg-black absolute bg-opacity-30"
        onClick={() =>
          window.history.replaceState(null, '', window.location.pathname)
        }
      />

      <div className="bg-white w-[650px] h-[450px] rounded-xl z-20 border border-2 border-[#43005E]">
        <h1 className={`${poltawski.className} text-4xl my-5 mx-5`}>
          Send me a message...
        </h1>
        <div className={`${m_plus_1.className}`}>
          <div className="flex flex-row my-6">
            <h2 className="text-xl px-10">Name:</h2>
            <input
              className="bg-[#F9F9F9] border border-[#C1C1C1] rounded h-[30px] w-[425px] p-2"
              value={formData.name}
              onChange={(e) => {
                setFormData({...formData, name: e.target.value});
              }}
            ></input>
          </div>

          <div className="flex flex-row my-6">
            <h2 className="text-xl px-10">Email:</h2>
            <input
              className="bg-[#F9F9F9] border border-[#C1C1C1] rounded h-[30px] w-[425px] p-2"
              value={formData.email}
              onChange={(e) => {
                setFormData({...formData, email: e.target.value});
              }}
              type="email"
            ></input>
          </div>

          <div className="flex flex-row mt-6">
            <h2 className="text-xl px-6">Message:</h2>
            <textarea
              className="bg-[#F9F9F9] border border-[#C1C1C1] rounded h-[125px] w-[425px] resize-none p-2"
              value={formData.message}
              onChange={(e) => {
                setFormData({...formData, message: e.target.value});
              }}
            ></textarea>
          </div>

          <div className="flex place-content-center">
            <p
              className={clsx(
                'my-4',
                {'text-white': errorMessage == 'Error message set up'},
                {
                  'text-red-500':
                    errorMessage == 'Please double check your entries',
                },
                {'text-green-500': errorMessage == 'Email sent successfully'}
              )}
            >
              {errorMessage}
            </p>
          </div>

          <div className="flex place-content-center">
            <button
              className="bg-[#43005E] w-[200px] h-[45px] text-white rounded-3xl opacity-75 text-xl"
              onClick={() => submit()}
            >
              Submit
            </button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

