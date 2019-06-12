class Cursor {
  constructor (el, links) {
    // Set cursor element as variable
    this.DOM = { el: el, x: 0, y: 0 };
    this.DOM.inner = this.DOM.el.querySelector('#jsCursorInner');
    // Set links elements variable
    this.links = links;

    // Init animation
    this.initAnimation();

    // Init mouse events
    this.initEvents();
  }

  initEvents () {
    // Mouse move function variable
    this.mousemoveFn = (e) => {
      this.DOM.x = e.pageX - 12;
      this.DOM.y = e.pageY - 12;
    };

    // Create the event to move the cursor
    document.addEventListener('mousemove', this.mousemoveFn);

    // Create custom events on link hover
    Array.from(this.links).forEach(link => new Link(link, this.DOM.inner));
  }

  initAnimation () {
    // Need this variable due to scope loss inside repeat TweenMax repeat function
    const _this = this;

    // Setup repeatable cursor transform animation
    TweenMax.to({}, 0.02, {
      repeat: -1,
      onRepeat: function() {
        // Update cursor mouse position on screen
        TweenMax.set(_this.DOM.el, {
          x: _this.DOM.x,
          y: _this.DOM.y,
        });
      },
    });
  }
}

// Create custom Link element hover state
class Link {
  constructor (el, cursor) {
    // Set link element and inner cursor element als variable
    this.DOM = { el: el, cursor: cursor };

    // Setup events
    this.initEvents();
  }

  initEvents () {
    // Setup mouseenter and mouseleave event listeners.
    this.DOM.el.addEventListener('mouseenter', this.mouseEnter.bind(this));
    this.DOM.el.addEventListener('mouseleave', this.mouseLeave.bind(this));
  }

  mouseEnter () {
    // Set mouse enter animation
    TweenMax.to(this.DOM.cursor, 1, {
      ease: Elastic.easeOut.config(1, 0.5),
      scale: 3,
      opacity: .75,
    });
  }
  mouseLeave () {
    // Set mouse leave animation
    TweenMax.to(this.DOM.cursor, 1, {
      ease: Elastic.easeOut.config(1, 0.5),
      scale: 1,
      opacity: .5,
    })
  }
}

// Create the new cursor
new Cursor(document.getElementById('jsCursor'), document.querySelectorAll('a'));