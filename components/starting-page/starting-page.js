import RestaurantPage from '../restaurant/RestaurantPage';
import classes from './starting-page.module.css';

function StartingPageContent({ data }) {
  // Show Link to Login page if NOT auth
  //console.log(restaurant)
  return (
    <section className={classes.starting}>
      <RestaurantPage data={data} />
    </section>
  );
}

export default StartingPageContent;
