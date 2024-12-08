import styled from "styled-components";
import {ProjectCarousel} from "../../components/ui/images/ProjectCarousel";
import {DescriptionParagraph} from "../../components/ui/DescriptionParagraph";
import {PageContent} from "../../components/ui/PageContent";
import {NavigateButton} from "../../components/ui/NavigateButton";

import image1 from "../../assets/images/header/image1.jpg";
import image2 from "../../assets/images/header/image2.jpg";
import image3 from "../../assets/images/header/image3.jpg";
import image4 from "../../assets/images/header/image4.jpg";

const H2 = styled.h2`
  text-align: center;
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const images = [image1, image2, image3, image4];
export const Project1 = () => {
  return (
    <PageContent>
      {/* title */}
      <H2>Project 1</H2>
      {/* carousel */}
      <ProjectCarousel images={images} />
      {/* description */}

      <ParagraphContainer>
        <DescriptionParagraph>
          I'm baby vHS tumblr normcore retro hexagon readymade DSA quinoa
          cupping kogi 8-bit yuccie iceland kombucha taxidermy. Four dollar
          toast mixtape pok pok, normcore freegan vegan tilde woke williamsburg
          marxism coloring book drinking vinegar. Cronut edison bulb adaptogen
          cred. Pop-up locavore succulents chicharrones four loko tousled
          intelligentsia polaroid neutra hexagon flexitarian. Unicorn narwhal
          roof party typewriter forage man braid cupping.
        </DescriptionParagraph>

        <DescriptionParagraph>
          Tousled blackbird spyplane etsy messenger bag gochujang la croix migas
          blue bottle you probably haven't heard of them pitchfork meh selfies
          fit. Grailed food truck vinyl roof party vibecession. Readymade jean
          shorts organic echo park slow-carb schlitz whatever shoreditch 90's
          sriracha big mood humblebrag blackbird spyplane fingerstache actually.
          Bushwick cliche distillery art party big mood cornhole offal fam
          taxidermy.
        </DescriptionParagraph>

        <DescriptionParagraph>
          Viral kombucha venmo trust fund unicorn pop-up shabby chic health goth
          disrupt irony, quinoa JOMO franzen. Kogi ennui you probably haven't
          heard of them seitan woke tilde. Gorpcore biodiesel polaroid DIY you
          probably haven't heard of them same selfies authentic put a bird on it
          sustainable tumblr viral typewriter farm-to-table solarpunk. 8-bit
          cold-pressed raclette austin wayfarers af pinterest hoodie tumeric
          chambray.
        </DescriptionParagraph>

        <DescriptionParagraph>
          VHS hot chicken quinoa kale chips bodega boys, pinterest truffaut
          tumeric vinyl. Coloring book irony grailed, gluten-free cornhole beard
          biodiesel adaptogen. Offal four dollar toast dreamcatcher pickled,
          vice shaman ennui gatekeep DSA adaptogen cloud bread scenester
          mustache. Hoodie vegan plaid bodega boys. Bruh palo santo prism twee 3
          wolf moon hell of chia everyday carry actually. Lomo paleo jawn umami
          mixtape. Palo santo keytar succulents, semiotics banjo ugh blackbird
          spyplane fingerstache next level adaptogen poutine pok pok pinterest
          sartorial.
        </DescriptionParagraph>

        <DescriptionParagraph>
          Synth shabby chic marxism, pok pok roof party pitchfork poke. Blue
          bottle edison bulb keytar, fashion axe cloud bread viral 90's lyft
          semiotics polaroid meditation. PBR&B seitan hell of, fanny pack
          typewriter chillwave glossier austin af small batch polaroid wolf. Man
          braid tousled pour-over, cupping godard bodega boys photo booth salvia
          iPhone kitsch Brooklyn. Etsy adaptogen enamel pin shabby chic
          gochujang waistcoat gentrify put a bird on it coloring book VHS
          gorpcore.
        </DescriptionParagraph>

        {/* links for previous, home, next project */}
      </ParagraphContainer>
      <NavigateButton nextPath={"/architecture/projects/project2"} />
    </PageContent>
  );
};
