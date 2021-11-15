import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const Companies = () => {
  const { filtered_companies } = useGlobalContext();
  return (
    <section className='companies'>
      <div className='all-companies-container'>
        {filtered_companies.map((item) => {
          const {
            id,
            company,
            logo,
            logoBackground,
            position,
            postedAt,
            contract,
            location,
          } = item;

          return (
            // single company container
            <article className='single-company' key={id}>
              <img
                src={logo}
                alt='company-logo'
                style={{ background: logoBackground }}
                className='company-logo'
              />
              <div className='contract-container'>
                <p>{postedAt}</p>
                <p className='dot'>.</p>
                <p>{contract}</p>
              </div>
              <Link to={`/products/${id}`}>
                <h3 className='position'>{position}</h3>
              </Link>
              <p className='company-name'>{company}</p>
              <h4 className='company-location'>{location}</h4>
            </article>
          );
        })}
      </div>
      <div className='load-btn-container'>
        <button className='submit-btn load-btn'>Load More</button>
      </div>
    </section>
  );
};

export default Companies;
