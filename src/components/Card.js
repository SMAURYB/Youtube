import uno from '../assets/Cards/img (0).png';
import dos from '../assets/Cards/img (1).png';
import tres from '../assets/Cards/img (2).png';
import cuatro from '../assets/Cards/img (3).png';

import a1 from '../assets/Cards/avatar (0).png';
import a2 from '../assets/Cards/avatar (1).png';
import a3 from '../assets/Cards/avatar (2).png';
import a4 from '../assets/Cards/avatar (3).png';

import '../styles/Card.css';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

const card = [
    {'photo': uno, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a1, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
    {'photo': dos, 'duration': '13:55', 'title': 'Los mejores atajos de teclado en Visual Studio Code', 'avatar': a2, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
    {'photo': tres, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a3, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
    {'photo': cuatro, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a4, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
    {'photo': uno, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a1, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
    {'photo': dos, 'duration': '13:55', 'title': 'Los mejores atajos de teclado en Visual Studio Code', 'avatar': a2, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
    {'photo': tres, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a3, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
    {'photo': cuatro, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a4, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
    {'photo': uno, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a1, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
    {'photo': dos, 'duration': '13:55', 'title': 'Los mejores atajos de teclado en Visual Studio Code', 'avatar': a2, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
    {'photo': tres, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a3, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
    {'photo': cuatro, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a4, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'}
  ]

function Card (){
    return(
        <div className="card">
            {card.map(card => (
                <div className='main-card' key={card.photo}>
                    <div className='main-card-img'>
                        <img src={card.photo} alt='Imagen'/>
                        <p className='duration'>{card.duration}</p>
                    </div>
                    <div className='main-card-info'>
                        <img className='avatar' src={card.avatar} alt='avatar' />
                        <div className='data'>
                            <p className='title' >{card.title}</p>
                            <p className='username' >{card.username}</p>
                            <p className='info' >{`${card.views} vistas - ${card.history}`}</p>
                        </div>
                    </div>
                </div>
            ))}            
        </div>
        
    )
}

export default Card;