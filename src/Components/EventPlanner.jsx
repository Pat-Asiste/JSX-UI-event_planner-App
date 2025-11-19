import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Bienvenido al planificador de eventos</h1>
            </header>
            <section className="description">
                <p>Planifica y organiza tus eventos sin esfuerzo con Event Planner. Desde fiestas de cumpleaños hasta reuniones corporativas, te tenemos cubierto.</p>
                <button className="get-started-button">Comenzar</button>
            </section>
            <section className="events_categories">
                <ul>
                    <h2>Eventos Sociales:</h2>
                    <li>Fiestas de cumpleaños</li>
                    <li>Celebraciones de aniversario</li>
                    <li>Recepciones de boda</li>
                    <li>Baby showers</li>
                    <li>Fiestas de graduación</li>
                    <li>Reuniones familiares</li>
                </ul>
                <ul>
                    <h2>Entretenimiento:</h2>
                    <li>Conciertos</li>
                    <li>Festivales musicales</li>
                    <li>Filmes</li>
                    <li>Shows de comedia</li>
                    <li>Exhibiciones de arte</li>
                    <li>Eventos culturales</li>
                </ul>
                <ul>
                    <h2>Eventos comunitarios:</h2>
                    <li>Recaudaciones</li>
                    <li>Galas de caridad</li>
                    <li>Campañas de voluntariado</li>
                    <li>Fiestas vecinales</li>
                    <li>Festivales comunitarios</li>
                    <li>Celebraciones culturales</li>
                </ul>
            </section>
            <section className="features"></section>
            <section className="testimonials"></section>
            <section className="contact"></section>
        </div>
    );
};

export default EventPlanner;
