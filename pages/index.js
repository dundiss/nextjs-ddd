import StartingPageContent from '../components/starting-page/starting-page';

function HomePage(props) {
  return <StartingPageContent data={props.data} />;
}

export default HomePage;

export const getStaticProps = () => {
  return {
    props: {
      data: {
        restaurant: {
          path: "Les Delices De Diebs",
          name: "Les Delices De Diebs - Massy",
          categories: ["Déjeuner"],
          price: "€",
          phone: "+336414720",
          percentage: 87,
          ratings: "50+",
          address: "Massy",
          delay: "10 - 20 Mins (Au plus tôt)",
          description:
            "Profitez quotidiennnement des 3D (Délices De Diebs). \nLes 3D proposent chaque jour un plat minitieusement préparé pour vous surprendre et vous faire apprécier les saveurs du Sénégal.",
          picture: "https://f.roocdn.com/images/menus/17697/header-image.jpg",
          client_address: {
            coordinates: [2.36051359999999, 48.8737157],
            locality: "Massy",
            country: "FR",
            formatted_address: "Massy, France",
            post_code: "91300",
            route: "Passage Dubail",
            street_number: "2",
            city: "Massy"
          }
        },
        categories: [
          {
            name: "Plat",
            meals: [
              {
                id: "1519055545-00",
                title: "Yassa au Poulet",
                description:
                  "Poulet mariné, oignon, carottes, olives, cornichon, riz",
                price: "5.00",
                picture:
                  "https://res.cloudinary.com/dundiss/image/upload/v1661280134/3D/yassa_hcivw2.jpg",
                popular: true,
                daySelection: true
              },
              {
                id: "1519055545-01",
                title: "Vermicelles au Poulet",
                description:
                  "Poulet mariné, oignon, carottes, olives, cornichon, riz",
                price: "5.00",
                picture:
                  "https://res.cloudinary.com/dundiss/image/upload/v1660775788/3D/vermicelles-au-poulet_su8fe3.jpg",
                popular: true
              },
              {
                id: "1519055545-02",
                title: "\nThiébou dieune (Riz au poisson)",
                description:
                  "Riz, Poisson, Oignon, ail, tomate, poivron, carotte, aubergine, laurier, citron, piment",
                price: "5.00",
                picture:
                  "https://res.cloudinary.com/dundiss/image/upload/v1660780642/3D/thiebou-dieune_uhzbxo.jpg"
              },
              {
                id: "1519055545-03",
                title: "Couscous",
                description:
                  "Couscous, viande, tomate, Pois de chiche, Oignon, courgette, carotte",
                price: "5.00",
                picture: "https://res.cloudinary.com/dundiss/image/upload/v1661123486/3D/couscous_jyl4bt.png"
              },
              {
                id: "1519055545-03",
                title: "Thiébou yap (Riz à la viande)",
                description:
                  "Riz, Viande de boeuf, Oignon, ail, poivron, carotte, laurier, poivre",
                price: "5.00",
                picture:
                  "https://f.roocdn.com/images/menu_items/3905693/item-image.jpg"
              },
              {
                id: "1519055545-04",
                title: "Thiébou guinar (Riz au Poulet)",
                description:
                  "Riz, Poulet, Oignon, ail, poivron, carotte, laurier, poivre",
                price: "5.00",
                picture:
                  "https://res.cloudinary.com/dundiss/image/upload/v1660781110/3D/thiebou-guinar_rxprmv.jpg",
                nextDaySelection: true
              },
              {
                id: "1519055545-05",
                title: "Mafé",
                description:
                  "Poulet ou Viande, sauce à base de pâte d'arachide, tomate, choux, pomme de terre, poivre",
                price: "5.00",
                picture:
                  "https://f.roocdn.com/images/menu_items/3905693/item-image.jpg"
              }
            ]
          },
          {
            name: "Entrées", meals: [
              {
                id: "1519055546-01",
                title: "Fatayas",
                description:
                  "",
                price: "1.50",
                picture:
                  "https://res.cloudinary.com/dundiss/image/upload/v1660782305/3D/fatayas_sthbhu.jpg"
              },
              {
                id: "1519055546-02",
                title: "Accras",
                description:
                  "",
                price: "1.50",
                picture:
                  "https://res.cloudinary.com/dundiss/image/upload/v1660782305/3D/fatayas_sthbhu.jpg"
              }
            ]
          },
          { name: "Sandwichs baguette", meals: [] },
          {
            name: "Desserts", meals: [
              {
                id: "1519055547-01",
                title: "Thiakry",
                description:
                  "Fait à base de farine de mil et du yaourt ou lait caillé",
                price: "1.50",
                picture:
                  "https://f.roocdn.com/images/menu_items/3905693/item-image.jpg"
              }
            ]
          },
          {
            name: "Boissons fraîches", meals: [
              {
                id: "1519055548-01",
                title: "Bissap",
                description:
                  "Jus à base de feuilles d'hibuscus",
                price: "1.50",
                picture:
                  "https://res.cloudinary.com/dundiss/image/upload/v1660782089/3D/bissap_gingimbre_teruhp.jpg"
              },
              {
                id: "1519055548-02",
                title: "Gingembre",
                description:
                  "Jus à base de gingimbre",
                price: "1.50",
                picture:
                  "https://res.cloudinary.com/dundiss/image/upload/v1660782089/3D/bissap_gingimbre_teruhp.jpg"
              }
            ]
          },
          { name: "Epicerie bio", meals: [] },
          { name: "Repas corporate", meals: [] },
          { name: "Couverts", meals: [] }
        ]
      }
    },
    revalidate: 1
  };
}