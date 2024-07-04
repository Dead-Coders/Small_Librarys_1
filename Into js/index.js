window.addEventListener('DOMContentLoaded', () => {
    introJs().setOptions({
        steps: [{
          title: 'Welcome',
          intro: 'Hello World! 👋'
        },
        {
          intro: '<img src="https://i.giphy.com/media/ujUdrdpX7Ok5W/giphy.webp" onerror="this.onerror=null;this.src=\'https://i.giphy.com/ujUdrdpX7Ok5W.gif\';" alt="">'
        },
        {
          element: document.querySelector('#step-one'),
          intro: 'This is an Heading of intro js'
        },

        {
          element: document.querySelector('#step-two'),
          intro: 'This is some details for intro js'
        },
        {
          element: document.querySelector('#btn'),
          intro: 'This is an Button on this page'
        },
        {
          element: document.querySelector('#step3'),
          intro: 'This is an Button on this page'
        },
        {
          element: document.querySelector('#step4'),
          intro: 'This is an Button on this page'
        }
    ]
      }).start();
});
