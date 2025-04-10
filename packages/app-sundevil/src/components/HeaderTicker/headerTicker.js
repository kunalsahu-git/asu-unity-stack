import React from 'react';
import './animations.css'; // Make sure this file is correctly imported

const words = [
  'Performant',
  'Efficient',
  'Reliable',
  'Secure',
  'Scalable',
  'Maintainable',
  'Testable',
  'Modular',
  'Documented',
  'Collaborative',
];

const HeaderTicker = () => {
  return (
    <div style={{ overflowX: 'hidden', padding: '2rem 0' }}>
      {/* <div style={{background: 'linear-gradient(to right, orange, skyblue)' }}> */}
      <div style={{background: 'black' }}>
        <div
          style={{
            display: 'flex',
            // maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            // WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="animate-move-left">
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {words.map((word, wordIndex) => (
                  <div key={wordIndex} style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '0.875rem', color: 'white' }}>
                      {word}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTicker;
