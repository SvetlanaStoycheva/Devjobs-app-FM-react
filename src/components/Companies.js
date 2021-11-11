import React from 'react';
import { useGlobalContext } from '../context';
import logo1 from '../';

const Companies = () => {
  const { all_companies, theme } = useGlobalContext();
  return (
    <section className='companies'>
      <div className='all-companies-container'>
        {all_companies.map((item) => {
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
          console.log(logo);

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
              <h3 className='position'>{position}</h3>
              <p className='company-name'>{company}</p>
              <h4 className='company-location'>{location}</h4>
            </article>
          );
        })}
      </div>
      <button className='submit-btn load-btn'>Load More</button>
    </section>
  );
};

export default Companies;
