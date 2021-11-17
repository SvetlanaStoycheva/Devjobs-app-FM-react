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
    description,
    requirements: { content, items },
    role: { content: roleContent, items: roleItems },
  } = currentCompany;

  return (
    <>
      <main className={`${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
        <Header />
        <section className='single-company-container'>
          {/* header */}
          <article className='single-company-header'>
            <img
              src={logo}
              alt={company}
              style={{ background: logoBackground }}
              className='company-logo single-company-logo'
            />
            <div className='text-btn-container'>
              <div className='single-company-name'>
                <h3>{company}</h3>
                <p>{company.toLowerCase()}.com</p>
              </div>
              <div className='single-company-btn-container'>
                <button className='submit-btn single-company-btn'>
                  Company Site
                </button>
              </div>
            </div>
          </article>
          {/* single page info */}
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
            {/* text */}
            <div className='single-company-general-info'>
              <p>{description}</p>
              <div className='single-company-requirments'>
                <h4>Requirements</h4>
                <p>{content}</p>
                <ul>
                  {items.map((item, index) => {
                    return (
                      <li
                        className='single-company-list'
                        style={{
                          listStyle: 'inside',
                          color: 'hsl(228, 67%, 53%)',
                        }}
                        key={index}
                      >
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className='single-company-role'>
                <h4>What You Will Do</h4>
                <p>{roleContent}</p>
                <ul>
                  {roleItems.map((item, index) => {
                    return (
                      <li
                        className='single-company-list2'
                        style={{
                          listStyle: 'inside',
                          listStyleType: 'decimal',
                          color: 'hsl(228, 67%, 53%)',
                        }}
                        key={index}
                      >
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </article>
          {/* footer */}
          <div className='single-company-footer'>
            <div className='single-company-footer-container'>
              <div className='footer-info'>
                <h4>{position}</h4>
                <p>So Digital Inc.</p>
              </div>
              <button className='submit-btn footer-btn'>Apply now</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SingleCompanyPage;
