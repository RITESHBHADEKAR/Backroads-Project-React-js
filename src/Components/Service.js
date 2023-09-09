import Title from './Title';
import { services } from '../data';

const Service = () => {
  return (
    <section className='section services' id='services'>
      <Title title='Our' subTitle='services' />
      <div className='section-center services-center'>
        {services.map((data) => {
          const { id, text, icon, title } = data;
          return (
            <article className='service' key={id}>
              <span className='service-icon'>
                <i className={icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{title}</h4>
                <p className='service-text'>{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
