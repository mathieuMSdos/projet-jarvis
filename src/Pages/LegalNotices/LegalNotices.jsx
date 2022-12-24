import React from "react";
import { motion } from "framer-motion";

export const LegalNotices = () => {
  return (
    <>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="legalNotices__container"
      >
        <h1 className="legalNotices__h1">Mentions Légales</h1>
        <div className="legalNotices__content">
          <span>1 - Édition du site</span> En vertu de l'article 6 de la loi n°
          2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique,
          il est précisé aux utilisateurs du site internet https://jarvis.com
          l'identité des différents intervenants dans le cadre de sa réalisation
          et de son suivi: Propriétaire du site : Jarvis Team - Contact : -
          Adresse : . Identification de l'entreprise : Jarvis Team au capital
          social de € - SIREN : - RCS ou RM : - Adresse postale : - [Consignes :
          ajoutez ici le lien hypertexte vers la page de vos conditions
          générales de vente si vous en avez une] Directeur de la publication :
          - Contact : . Hébergeur : AutreVercel Délégué à la protection des
          données : - Autres contributeurs :{" "}
          <span>2 - Propriété intellectuelle et contrefaçons.</span> Jarvis Team
          est propriétaire des droits de propriété intellectuelle et détient les
          droits d’usage sur tous les éléments accessibles sur le site internet,
          notamment les textes, images, graphismes, logos, vidéos, architecture,
          icônes et sons. Toute reproduction, représentation, modification,
          publication, adaptation de tout ou partie des éléments du site, quel
          que soit le moyen ou le procédé utilisé, est interdite, sauf
          autorisation écrite préalable de Jarvis Team. Toute exploitation non
          autorisée du site ou de l’un quelconque des éléments qu’il contient
          sera considérée comme constitutive d’une contrefaçon et poursuivie
          conformément aux dispositions des articles L.335-2 et suivants du Code
          de Propriété Intellectuelle.{" "}
          <span>3 - Limitations de responsabilité.</span> Jarvis Team ne pourra
          être tenu pour responsable des dommages directs et indirects causés au
          matériel de l’utilisateur, lors de l’accès au site https://jarvis.com.
          Jarvis Team décline toute responsabilité quant à l’utilisation qui
          pourrait être faite des informations et contenus présents sur
          https://jarvis.com. Jarvis Team s’engage à sécuriser au mieux le site
          https://jarvis.com, cependant sa responsabilité ne pourra être mise en
          cause si des données indésirables sont importées et installées sur son
          site à son insu. Des espaces interactifs (espace contact ou
          commentaires) sont à la disposition des utilisateurs. Jarvis Team se
          réserve le droit de supprimer, sans mise en demeure préalable, tout
          contenu déposé dans cet espace qui contreviendrait à la législation
          applicable en France, en particulier aux dispositions relatives à la
          protection des données. Le cas échéant, Jarvis Team se réserve
          également la possibilité de mettre en cause la responsabilité civile
          et/ou pénale de l’utilisateur, notamment en cas de message à caractère
          raciste, injurieux, diffamant, ou pornographique, quel que soit le
          support utilisé (texte, photographie …).{" "}
          <span>4 - CNIL et gestion des données personnelles.</span>{" "}
          Conformément aux dispositions de la loi 78-17 du 6 janvier 1978
          modifiée, l’utilisateur du site https://jarvis.com dispose d’un droit
          d’accès, de modification et de suppression des informations
          collectées. Pour exercer ce droit, envoyez un message à notre Délégué
          à la Protection des Données : - . Pour plus d'informations sur la
          façon dont nous traitons vos données (type de données, finalité,
          destinataire...), lisez notre
          http://jarvis.com/politique-de-confidentialité. [Consignes : ajoutez
          ici le lien hypertexte vers votre politique de confidentialité]{" "}
          <span>5 - Liens hypertextes et cookies</span> Le site
          https://jarvis.com contient des liens hypertextes vers d’autres sites
          et dégage toute responsabilité à propos de ces liens externes ou des
          liens créés par d’autres sites vers https://jarvis.com. La navigation
          sur le site https://jarvis.com est susceptible de provoquer
          l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un
          "cookie" est un fichier de petite taille qui enregistre des
          informations relatives à la navigation d’un utilisateur sur un site.
          Les données ainsi obtenues permettent d'obtenir des mesures de
          fréquentation, par exemple. Vous avez la possibilité d’accepter ou de
          refuser les cookies en modifiant les paramètres de votre navigateur.
          Aucun cookie ne sera déposé sans votre consentement. Les cookies sont
          enregistrés pour une durée maximale de mois. Pour plus d'informations
          sur la façon dont nous faisons usage des cookies, lisez notre
          http://jarvis.com/politique-de-confidentialité. [Consignes : ajoutez
          ici le lien hypertexte vers votre politique de confidentialité ou vers
          votre politique de cookies si vous en avez une (c'est le cas si vous
          utilisez Complianz)]{" "}
          <span>6 - Droit applicable et attribution de juridiction.</span> Tout
          litige en relation avec l’utilisation du site https://jarvis.com est
          soumis au droit français. En dehors des cas où la loi ne le permet
          pas, il est fait attribution exclusive de juridiction aux tribunaux
          compétents de .
        </div>
      </motion.div>
    </>
  );
};
