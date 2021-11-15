import React from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';

const SingleCompanyPage = () => {
  const { theme, all_companies } = useGlobalContext();
  let { id } = useParams();
  id = Number(id);

  const currentCompany = all_companies.find((item) => item.id === id);
  console.log(currentCompany);
  const {
    company,
    logo,
    logoBackground,
    postedAt,
    contract,
    position,
    location,
  } = currentCompany;

  return (
    <>
      <main className={`${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
        <Header />
        <section className='single-company-container'>
          <article className='single-company-header'>
            <img
              src={logo}
              alt={company}
              style={{ background: logoBackground }}
            />
            <div className='single-company-name'>
              <h3>{company}</h3>
              <p>{company.toLowerCase()}.com</p>
            </div>
            <button className='submit-btn'>Company Site</button>
          </article>
          <article className='single-company-content'>
            <div className='single-company-content-header'>
              <div className='single-company-content-header-left'>
                <div className='contract-container'>
                  <p>{postedAt}</p>
                  <p className='dot'>.</p>
                  <p>{contract}</p>
                </div>
                <h3 className='position'>{position}</h3>
                <h4 className='company-location'>{location}</h4>
              </div>
              <button className='submit-btn'>Apply Now</button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default SingleCompanyPage;
