import { motion } from 'framer-motion'

var aboutCards = [{
  icon: 'far fa-4x fa-user',
  title: 'Damodar M',
  desc: 'National Level Player, University Blue, Fide Rating: 1227'
},
{
  icon: 'far fa-4x fa-user',
  title: 'Parthsarthy R',
  desc: 'Commonwealth Player, University Blue, Fide Rating: 1992'
},
{
  icon: 'far fa-4x fa-user',
  title: 'Jatin S N',
  desc: 'World Amateur Champion, University Blue, Fide Rating: 1705'
}
]
const ContactCards = ({ contactList, setSelectedContact }) => {
  return (
    <>
      {aboutCards?.map((contact, index) => (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: index/5 }}
          drag={false}
          dragElastic={1}
          dragConstraints={{ top: 1, bottom: 1, right: 1, left: 1 }}
          className="bg-black text-white h-80 w-full rounded-lg shadow-md mr-96"
          key={index}
          onClick={() => setSelectedContact(contact)}
        >
          <img alt="user" className="w-32 h-32 rounded-full mx-auto mt-7" src={contact.icon} />
          <figcaption className="text-center mt-5">
            <p className="text-gray-700 font-semibold text-xl mb-2">
              {contact.title} 
            </p>
      </figcaption> 
        </motion.button>

      ))}
    </>
  )
}

export default ContactCards
