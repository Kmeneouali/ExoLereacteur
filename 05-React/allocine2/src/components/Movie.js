import React from "react";
import Infos from "./Infos";

const Movie = () => {
  return (
    <div className="Movie">
      <h1>2001 : L'odyssée de l'espace</h1>
      <div className="Movie--center">
        <div className="Movie--columns">
          <div className="Movie--poster">
            <img
              src="http://fr.web.img6.acsta.net/r_1920_1080/medias/nmedia/18/36/08/60/18802257.jpg"
              alt="movie poster"
            />
          </div>
          <div className="Movie--infos">
            <Infos />
          </div>
        </div>
        <h2>Synopsis et détails</h2>
        <div className="Movie--synopsis">
          <p>
            A l'aube de l'Humanité, dans le désert africain, une tribu de
            primates subit les assauts répétés d'une bande rivale, qui lui
            dispute un point d'eau. La découverte d'un monolithe noir inspire au
            chef des singes assiégés un geste inédit et décisif. Brandissant un
            os, il passe à l'attaque et massacre ses adversaires. Le premier
            instrument est né. En 2001, quatre millions d'années plus tard, un
            vaisseau spatial évolue en orbite lunaire au rythme langoureux du
            "Beau Danube Bleu". A son bord, le Dr. Heywood Floyd enquête
            secrètement sur la découverte d'un monolithe noir qui émet
            d'étranges signaux vers Jupiter.
            <br />
            Dix-huit mois plus tard, les astronautes David Bowman et Frank Poole
            font route vers Jupiter à bord du Discovery. Les deux hommes vaquent
            sereinement à leurs tâches quotidiennes sous le contrôle de HAL
            9000, un ordinateur exceptionnel doué d'intelligence et de parole.
            Cependant, HAL, sans doute plus humain que ses maîtres, commence à
            donner des signes d'inquiétude : à quoi rime cette mission et que
            risque-t-on de découvrir sur Jupiter ?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
