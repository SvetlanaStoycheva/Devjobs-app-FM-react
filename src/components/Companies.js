import React from 'react';
import { useGlobalContext } from '../context';
import logo1 from '../';

const Companies = () => {
  const { all_companies, theme } = useGlobalContext();
  return (
    <section
      className={`${
        theme === 'light' ? 'companies light-theme' : 'companies dark-theme'
      }`}
    >
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
          <article className='single-company' key={id}>
            <img
              src={logo}
              alt='company-logo'
              style={{ background: logoBackground }}
            />
          </article>
        );
      })}
      <button></button>
    </section>
  );
};

export default Companies;
