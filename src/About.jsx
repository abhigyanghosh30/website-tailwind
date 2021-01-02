import { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="container mx-auto p-10">
        <div className="md:grid md:grid-cols-8 md:gap-4">
          <img
            src="profile.svg"
            alt="profile-pic"
            className="md:col-span-2 object-scale-down rounded-full mx-auto p-10"
          />
          <div className="md:col-span-5 col-end-9 font-custom font-light text-xl p-10">
            <p>
              Abhigyan Ghosh, born in Jamshedpur, in 199*, aspires to be ...
              honestly at this point I've lost track of what I want to be.
            </p>
            <br />
            <p>
              Since his beginnings, Abhigyan had a keen interest in automobiles.
              Thanks to this inclination, he had aspired to become an automotive
              designer. However his aspirations were often met with scorns and
              ridicule even from his own parents. Even in the face of adversary,
              Abhigyan remained determined. He used to sketch ideas onto his
              personal diary and had filled atleast 4-5 with designs in high
              school. They say that great minds cannot be contained but spread
              like a disease infecting the people around them. Abhigyan's
              parents tried to stop this madness by not only disallowing him to
              'waste paper' but also selling his diaries away to a junk
              collector for scrap money. But this would not stop the rebellious
              boy who would innovate ways to sneak the diary past his parents
              and stored it in a secret comparment in his study desk away from
              prying eyes.
            </p>
            <br />
            <p>
              However because of Abhigyan's lack of ability to put effort into
              studies, he was not able to get into his dream college, missing
              the mark by just 200 ranks. But Abhigyan was not disheartened by
              this failure and got admission in the International Institute of
              Information Technology where he pursued Computational Linguistics
              instead.
            </p>
            <br />
            <p>
              There Abhigyan was educated in the art of writing well documented
              code. However, the things that impressed him most were Open Source
              Softwares and UI/UX development. Automotive design was a hobby for
              him at this point which he rarely got to do because of the
              academic load at college. However the fire was still burning,
              albeit a bit dull by this point.
            </p>
            <br />
            <p>
              Disaster 2020! Coronavirus swiped the world claiming the lives of
              thousands. Under the circumstances, all students were sent back
              home as a safety measure. After classes were over in the June of
              that year, Abhigyan was bored. He tried his hand at automotive
              designing but his skills were very dull at this point. The blade
              of cutting edge design had rust all over it. So that summer, being
              stuck at home and bored, Abhigyan decided to take things into his
              own hands. Years ago his reluctance to work hard had cost him his
              dreams but this time he would not stop till he finally got
              somewhere. So he decided to merge his interests into a huge
              crossover project that no one asked for. Abhigyan used his love
              for Open Source Software to learn Inkscape, which he used to trace
              out images of iconic and beautiful cars. He then set to design his
              personal website which he set to showcase his art to the world.
            </p>
            <br />
            <p>
              He is currently still making and publishing new artwork. You can
              follow him on Instagram at{' '}
              <a
                className="hover:text-regal-gold hover:bg-regal-blue-900 text-silver-900"
                href="https://www.instagram.com/mastergworksinc"
                target="_blank"
                rel="noreferrer">
                @mastergworksinc
              </a>
            </p>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default About;
