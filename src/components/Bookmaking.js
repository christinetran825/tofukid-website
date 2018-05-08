import React, { Component } from 'react';

class Bookmaking extends Component {
  render(){
    return (
      <section className="books">
        <h1>Book Arts</h1>
        <div className="book">
          <div className="title">
            <div className="project-name">
              <h3>Sending Hugs</h3>
            </div>
          </div>
          <div className="details">
            <p className="notes">1st place MFA: Book Arts - AAU Spring Show 2013</p>
            <p>One day my cousin sent her arm span of a hug by mail. Her sweet gift was a great idea for a children's book. "Sending Hugs" was meant to portray a bright orange colored muppet dressed in a long-sleeve dress shirt symbolizing the innocence and child-like gestures. My colophon (the author's information and comments) was placed on the back of the book as if it was the shirt tag sewn into the shirt. As the whole book expands, the text reads together fluidly from one arm to the other left-to-right AND right-to-left. Best of all, you can wrap the entire book around you for a hug.</p>
          </div>
          <div className="images">
            <img src="../images/book-sendinghugs-1.jpg" alt="sending hugs book" />
            <img src="../images/book-sendinghugs-2.jpg" alt="sending hugs book" />
            <img src="../images/book-sendinghugs-3.jpg" alt="sending hugs book" />
            <img src="../images/book-sendinghugs-4.jpg" alt="sending hugs book" />
          </div>
        </div>
        <div className="book">
          <div className="title">
            <div className="project-name">
              <h3>The Art of Presentation</h3>
            </div>
          </div>
          <div className="details">
            <p>Accordion book with mixed paper</p>
            <p>The book reflects the many teachings from a class called The Art of Presentation. These teachings range from mindfulness to defining who you are and owning it. A variety of handmade and found imagery emphasizes selected golden nuggets of truth that inspired me to continue to find comfort in my discomfort. The back of the book is filled with short messages from my classmates and teacher.</p>
          </div>
          <div className="images">
            <img src="../images/art-of-03.jpg" alt="art of presentation book" />
            <img src="../images/art-of-17.jpg" alt="art of presentation book" />
            <img src="../images/art-of-18.jpg" alt="art of presentation book" />
            <img src="../images/art-of-22.jpg" alt="art of presentation book" />
          </div>
        </div>
        <div className="book">
          <div className="title">
            <div className="project-name">
              <h3>A Seahorse's Journey</h3>
            </div>
          </div>
          <div className="details">
            <p>Accordion book with mixed paper</p>
            <p>Hand-cut scraps of specialty paper were used for texture, patterns, and color. A sprinkle of illustrations capture an underwater world through a seahorse's point of view as it searches for friendship.</p>
          </div>
          <div className="images">
            <img src="../images/seahorse-05.jpg" alt="seahorse book" />
            <img src="../images/seahorse-07.jpg" alt="seahorse book" />
            <img src="../images/seahorse-08.jpg" alt="seahorse book" />
            <img src="../images/seahorse-09.jpg" alt="seahorse book" />
          </div>
        </div>
        <div className="book">
          <div className="title">
            <div className="project-name">
              <h3>A Very Hungry Snake</h3>
            </div>
          </div>
          <div className="details">
            <p>Accordion book with Prochoir method</p>
            <p>I found some great textured paper that look like a snake's scales. I thought a snake's length would be a great way to express the accordion structure and the story's content. The illustration was made to show the inside of a snake to see what it ate throughout a period of time. Using the Prochoir method, I transfered printed clip arts and text. In the future, I'll recreate this story and technique to create exaggerations for a more humorous story.</p>
          </div>
          <div className="images">
            <img src="../images/snake-04.jpg" alt="snake book" />
            <img src="../images/snake-06.jpg" alt="snake book" />
            <img src="../images/snake-08.jpg" alt="snake book" />
            <img src="../images/snake-09.jpg" alt="snake book" />
          </div>
        </div>
        <div className="book">
          <div className="title">
            <div className="project-name">
              <h3>Auspicious Hopes</h3>
            </div>
          </div>
          <div className="details">
            <p>Custom book with personal trinkets</p>
            <p>I've collected many red envelopes given to me during Chinese New Years and my birthday. Most cherished are the ones with my Chinese name written by my grandpa. I've also collected some fortune cookie slips during 2011-2012 when I had a year long fortune cookie craving. Many of the slips are poetic while others are humorous. Filled with hope, excitement, and love, I decided to create a book using the fortune slips to create my own poem that reflected my life at the time. I filled each envelope with old trinkets like dried flowers symbolizing each labeled fortune.</p>
            <p className="notes">Note - A slight design error: The title of my Chinese name should have been printed in red and gold, not white and black. White and black symbolizes the opposite of auspiciousness.</p>
          </div>
          <div className="images">
            <img src="../images/hopes-04.jpg" alt="auspicious book" />
            <img src="../images/hopes-06.jpg" alt="auspicious book" />
            <img src="../images/hopes-09.jpg" alt="auspicious book" />
            <img src="../images/hopes-12.jpg" alt="auspicious book" />
          </div>
        </div>
      </section>
    )
  }
}

export default Bookmaking;
