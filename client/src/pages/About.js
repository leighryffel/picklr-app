import React from "react";
import ReactPlayer from "react-player";

function About() {
  return (
    <div>
      <h1 className="about-header">All About Pickleball</h1>
      <ReactPlayer
        className="video"
        url={"https://www.youtube.com/watch?v=ek3DCa_sZX8&t=25s"}
        playing={false}
        alt="pickleball"
      />
      <h2>What is Pickleball?</h2>
      <p>
        Pickleball is a paddle sport that combines elements of tennis,
        badminton, and ping-pong using a paddle and plastic ball with holes. It
        is a game that is appropriate for players of all ages and skill levels.
        Rules for pickleball are simple, making it a great introductory sport.
        It can also be quite the challenging, fast-paced, and competitive game
        when people become more experienced at playing.
      </p>
      <h2>Why is Pickleball So Popular?</h2>
      <p>
        There are many reasons for pickleball's popularity in recent years. Here
        are just some reasons why the USA Pickleball Association (USAPA) calls
        the sport “highly contagious”!
      </p>
      <h3>Pickleball is Ideal for All Skill Levels</h3>
      <p>
        Because pickleball rules are so similar to ping-pong, it can be easy for
        practically anyone to learn how to play the game. Whether you're a
        beginner who just wants to learn a new sport for fun, or you're a
        seasoned player who craves the thrill of more competitive play,
        pickleball offers something for everyone.
      </p>
      <h3>Pickleball is a Social Activity</h3>
      <p>
        Because a pickleball court is smaller than a tennis court (you can
        actually convert one tennis court into four pickleball courts), gameplay
        allows players to be close enough to one another that they can hold
        conversations. So, if you're looking to bond with your family or have an
        outing with friends new or old, pickleball makes it easy to do just that
        while also giving you the ability to fit in a fun workout.
      </p>
      <h3>Playing Pickleball is Healthy</h3>
      <p>
        If you are looking for some great exercise for your mind and body,
        pickleball can't be beat. Playing pickleball allows you to work on your
        balance, agility, reflexes, and hand-eye coordination without putting
        excessive strains on your body. Pickleball is a wonderful alternative
        for older players who used to play tennis, but have physical limitations
        such as hip, shoulder, knee, or other joint problems.
      </p>
      <h3>Pickleball is Perfect for Parks and Recreation Departments</h3>
      <p>
        Many parks and rec departments are already meeting the demands of the
        public and repurposing tennis courts for pickleball games. If you are
        looking to add an exciting, new program to your recreational offerings
        this summer, pickleball is an affordable and popular choice. Because
        pickleball can be played both indoors and outdoors, it's an accessible
        option for recreational facilities of all types. Installing an outdoor
        pickleball pole is easy, and tri-sport recreational poles make
        converting to badminton, mini-volleyball, and pickleball a breeze.
      </p>
    </div>
  );
}

export default About;
