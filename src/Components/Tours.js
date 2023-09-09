import Title from './Title';
import { ToursData } from '../data';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='Featured ' subTitle='Tours' />

      <div className='section-center featured-center'>
        {ToursData.map((data) => {
          const { id, title, text, date, day, image, price, destination } =
            data;
          return (
            <article className='tour-card' key={id}>
              <div className='tour-img-container'>
                <img src={image} className='tour-img' alt={title} />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>{' '}
                    {destination}
                  </p>
                  <p>{day}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
