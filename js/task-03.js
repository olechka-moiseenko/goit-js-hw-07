const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const style =  document.querySelector("style");
  style.textContent += `
  .flexBox{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .imageStyle{
    width: 320px;
    height: 240px;
  }`;

  const listItems = images.map(i => {
    const li = document.createElement('li');
    li.insertAdjacentHTML('beforeend', `<img class="imageStyle" src="${i.url}" alt="${i.alt}"></img>`);
    return li;
  });
  const ul = document.querySelector("ul#gallery");
  ul.classList.add('flexBox');
  ul.append(...listItems);
 