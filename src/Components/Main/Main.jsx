import React from 'react';
import './main.css';
import {MdExpandMore} from 'react-icons/md';
import {SlLocationPin} from 'react-icons/sl';
import img3 from '../../assets/img3.jpg';
import img5 from '../../assets/img5.jpg';
import img4 from '../../assets/img4.jpg';
import img1 from '../../assets/img1.jpg';
import img10 from '../../assets/img10.jpg';
import img8 from '../../assets/img8.jpg';

const Data = [
    {
        id:0,
        imgSrc:img3,
        destTitle:'Sigiriya',
        location:'Dambulla',
        description:"Sigiriya or Sinhagiri (Lion Rock Sinhala: සීගිරිය, Tamil: சிகிரியா/சிங்ககிரி, pronounced see-gi-ri-yə) is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 m (590 ft) high.The capital and the royal palace were abandoned after the king's death. It was used as a Buddhist monastery until the 14th century.[3] Sigiriya today is a UNESCO listed World Heritage Site. It is one of the best preserved examples of ancient urban planning.According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital."
    },
    {
        id:1,
        imgSrc:img5,
        destTitle:'Abayagiriya Stupa',
        location:'Polonnaruwa',
        description:'Abhayagiri Vihāra was a major monastery site of Mahayana, Theravada and Vajrayana Buddhism that was situated in Anuradhapura, Sri Lanka. It is one of the most extensive ruins in the world and one of the most sacred Buddhist pilgrimage cities in the nation. Historically it was a great monastic centre as well as a royal capital, with magnificent monasteries rising to many stories, roofed with gilt bronze or tiles of burnt clay glazed in brilliant colours. To the north of the city, encircled by great walls and containing elaborate bathing ponds, carved balustrades and moonstones, stood "Abhayagiri", one of seventeen such religious units in Anuradhapura and the largest of its five major viharas. One of the focal points of the complex is an ancient stupa, the Abhayagiri Dagaba.',
    },
    {
        id:2,
        imgSrc:img4,
        destTitle:'Temple of Tooth Relic',
        location:'Kandy',
        description:'The Temple of the Sacred Tooth Relic or Sri Dalada Maligawa,[a] (Sinhala: ශ්‍රී දළදා මාළිගාව) is a Buddhist temple in Kandy, Sri Lanka. It is located in the royal palace complex of the former Kingdom of Kandy, which houses the relic of the tooth of the Buddha. Since ancient times, the relic has played an important role in local politics because it is believed that whoever holds the relic holds the governance of the country. The relic was historically held by Sinhalese kings. The temple of the tooth is a World Heritage Site mainly due to the temple and the relic.'
    },
    {
        id:3,
        imgSrc:img1,
        destTitle:'Nine Arch',
        location:'Ella',
        description:"The Nine Arches Bridge (Sinhala: ආරුක්කු නමයේ පාලම,) also called the Bridge in the Sky,[3] is a viaduct bridge in Sri Lanka. It is one of the best examples of colonial-era railway construction in the country.It is located in Demodara, between Ella and Demodara railway stations. The surrounding area has seen a steady increase of tourism due to the bridge's architectural ingenuity and the profuse greenery in the nearby hillsides.It is located in Demodara, between Ella and Demodara railway stations. The surrounding area has seen a steady increase of tourism due to the bridge's architectural ingenuity and the profuse greenery in the nearby hillsides.["
    },
    {
        id:4,
        imgSrc:img10,
        destTitle:'Koneshwaram Kovil',
        location:'Trincomalee',
        description:'Koneswaram Temple of Trincomalee (Tamil: திருக் கோணேச்சரம் கோயில்) or Thirukonamalai Konesar Temple – The Temple of the Thousand Pillars and Dakshina-Then Kailasam (Southern / Ancient Kailash) is a classical-medieval Hindu temple complex in Trincomalee, a Hindu religious pilgrimage centre in Eastern Province, Sri Lanka. The most sacred of the Pancha Ishwarams of Sri Lanka, it was built significantly during the ancient period on top of Konesar Malai, a promontory overlooking Trincomalee District, Gokarna bay and the Indian Ocean. The monument contains its main shrine to Shiva in the form Kona-Eiswara, shortened to Konesar.'
    },
    {
        id:5,
        imgSrc:img8,
        destTitle:'Unawatuna Beach',
        location:'Galle',
        description:'Unawatuna is a coastal town in Galle district of Sri Lanka. Unawatuna is a major tourist attraction in Sri Lanka and known for its beach and corals. It is a suburb of Galle, about 5 kilometres (3.1 mi) southeast to the city center and approximately 108 kilometres (67 mi) south of Colombo. Unawatuna is situated at an elevation of 5 metres (16 ft) above the sea level. Despite significant development in the last decade it is still home to the endangered and endemic purple-faced langur, an usually shy monkey species that can only be found in Sri Lanka forests.'
    }
]

const Main = () => {
    return (
       <section className="main container section">
            
            <div className="secTitle">
                <h1>Most Visited Destinations</h1>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id,imgSrc,destTitle,location,description})=>{
                        return (
                            <div key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="detTitle">{destTitle}</h4>
                                    <span className="continet flex">
                                        <SlLocationPin className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        More <MdExpandMore className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }   
            </div>

       </section>
    )
}

export default Main;