import 'react-phone-number-input/style.css';
import { useState, SyntheticEvent, ChangeEvent } from 'react';
import PhoneInput from 'react-phone-number-input';

interface MsgData {
  name: string,
  message: string
}

type E164Number = string;



function Contact() {
  const [phoneNumber, setPhoneNumber] = useState<E164Number>('+998');
  const [msg, setMsg] = useState<MsgData>({
    name: '',
    message: ''
    
  })
  const [isPending, setPending] = useState(false)

  const allMessage = `Name: ${msg.name} %0AMobile Number: ${phoneNumber} %0AMessage: 👇👇 %0A${msg.message}`

  async function getReq(e: SyntheticEvent) {
    e.preventDefault()
    try {
      setPending(true)
      await fetch(`https://api.telegram.org/bot6358345393:AAGm2eRzhefHU7vWgZswC0La8XaISprGVJs/sendMessage?chat_id=5281539071&text=${allMessage}`)
      setMsg({
        name: '',
        message: ''
      })
      setPhoneNumber('+998')
    }catch(err) {
      console.log(err);
    }finally {
      setPending(false)
    }
  }

  function handleValue(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;

    setMsg((prevMsg) => ({
      ...prevMsg,
      [name]: value,
    }));
  }

  return (
    <div className="sm:container-sm md:container mx-auto minism:py-20 md:py-28">
      <form onSubmit={getReq} className="bg-bgColor2 max-w-2xl min-h-96 flex flex-col items-start gap-4 rounded-lg p-4">
        <div className="flex flex-wrap flex-row gap-4">
          <input name='name' required autoComplete='off' value={msg.name} onChange={handleValue} className="shadow-inner min-w-60 border-black border-2 outline-none rounded-md px-2 py-1" type="text" placeholder="Ismingiz !" />
          <PhoneInput
      required
      autoComplete='off'
      name="phone"
      placeholder="Telefon raqamingiz !"
      value={phoneNumber}
      onChange={(value: E164Number | undefined) => {
        setPhoneNumber(value || ''); // Handle the case where value is undefined
      }}
      defaultCountry="UZ"
      regions={['Asia']}
      className="shadow-inner border-black border-2 outline-none rounded-md min-w-60 w-6/13 px-2 py-1"
    />
        </div>
        <textarea required autoComplete='off' value={msg.message} name="message" onChange={handleValue} className="shadow-inner md:w-3/4 min-w-60 min-h-60 border-black border-2 outline-none rounded-md px-2 py-1" placeholder='Qanday maqsadda yozmoqdasiz !'></textarea>
        <button className={`bg-btnColor flex gap-2 text-bgColor2 py-2 px-6 items-center ${isPending ? 'pr-2' : ''} rounded-md`} type='submit'>
          <span>Yuborish</span>
          {isPending && (<svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>)}
        </button>
      </form>
    </div>
  );
}

export default Contact;
