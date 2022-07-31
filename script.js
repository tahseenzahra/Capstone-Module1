// Mobile menu popup

const menu = document.querySelector('#mob-menu');
const hamburger = document.querySelector('#hamburger-icon');
const closebtn = document.querySelector('#x-iconid');
const navlinks = document.querySelector('#navLinks');

hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
  hamburger.style.display = 'none';
});

closebtn.addEventListener('click', () => {
  menu.style.display = 'none';
  hamburger.style.display = 'block';
});

navlinks.addEventListener('click', () => {
  menu.style.display = 'none';
  hamburger.style.display = 'block';
});

// Featured Staff

const speakers = [
  {
    image_url: './images/p1-yochai.png',
    name: 'Yochai Benkler',
    designation:
      'Piolt',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
  {
    image_url: './images/p2-kilnam.png',
    name: 'Kilnam Chon',
    designation: 'Senior Trainer',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
  {
    image_url: './images/p3-sohyeong.png',
    name: 'SohYeong Noh',
    designation: 'Tour Guide',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
  {
    image_url: './images/p4-julia.png',
    name: 'Julia Leda',
    designation: 'CEO of Administration Department',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
  {
    image_url: './images/p5-lila.png',
    name: 'Lila Tretikov',
    designation: 'Manager',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
  {
    image_url: './images/p6-ryan.png',
    name: 'Ryan Merkley',
    designation: 'Cordinator',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
];

const featuredSpeakerSection = document.createElement('section');
featuredSpeakerSection.id = 'featured-speakers';
{
  const featuredSpeakerHeading = document.createElement('h2');
  featuredSpeakerHeading.innerText = 'Featured Speakers';
  featuredSpeakerSection.appendChild(featuredSpeakerHeading);
}
{
  const featuredSpeakerLineSeperator = document.createElement('hr');
  featuredSpeakerSection.appendChild(featuredSpeakerLineSeperator);
}
{
  const featuredSpeakerList = document.createElement('ul');
  featuredSpeakerList.id = 'featured-speakers-list';
  for (let i = 0; i < speakers.length; i += 1) {
    const featuredSpeakerListItem = document.createElement('li');
    {
      const featuredSpeakerImage = document.createElement('img');
      featuredSpeakerImage.alt = 'staff member';
      featuredSpeakerImage.src = speakers[i].image_url;
      featuredSpeakerListItem.appendChild(featuredSpeakerImage);
    }
    {
      const featuredSpeakerInfo = document.createElement('div');
      {
        const featuredSpeakerName = document.createElement('h3');
        featuredSpeakerName.innerText = speakers[i].name;
        featuredSpeakerInfo.appendChild(featuredSpeakerName);
      }
      {
        const featuredSpeakerDesignation = document.createElement('h4');
        featuredSpeakerDesignation.innerText = speakers[i].designation;
        featuredSpeakerInfo.appendChild(featuredSpeakerDesignation);
      }
      {
        const featuredSpeakerSeperator = document.createElement('hr');
        featuredSpeakerInfo.appendChild(featuredSpeakerSeperator);

        // const featuredSpeakerSeperator = document.createElement('div');
        // featuredSpeakerSeperator.className = 'red-bar';
        // featuredSpeakerInfo.appendChild(featuredSpeakerSeperator);
      }
      {
        const featuredSpeakerIntroduction = document.createElement('p');
        featuredSpeakerIntroduction.innerText = speakers[i].introduction;
        featuredSpeakerInfo.appendChild(featuredSpeakerIntroduction);
      }
      featuredSpeakerListItem.appendChild(featuredSpeakerInfo);
    }
    featuredSpeakerList.appendChild(featuredSpeakerListItem);
  }
  featuredSpeakerSection.appendChild(featuredSpeakerList);
}

document.querySelector('body > main').insertBefore(
  featuredSpeakerSection,
  document.getElementById('partner'),
);
