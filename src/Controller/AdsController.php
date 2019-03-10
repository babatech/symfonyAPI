<?php

namespace App\Controller;

use App\Entity\Ads;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;


use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;


class AdsController extends ApiController
{
    /**
     * @Route("/ads", name="ads")
     */
    public function adsAction()
    {
        return $this->respond([
            [
                'title' => 'Royal bar',
                'text' => '',
                'image' => '',
                'sponsoredBy' => '',
                'trackingUrl' => '',
            ]
        ]);
    }

    /**
     * @Route("/", name="restaurants")
     */
    public function restaurantsAction()
    {
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->findAllRestaurants();

        $restaurants = $this->processrestaurant($restaurants,true);

        return $this->respond($restaurants);
    }

    /**
     * @Route("/topmatch", name="topMatch")
     */
    public function topMatchAction()
    {
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->findTopMatch();
        $restaurants = $this->processrestaurant($restaurants);

        return $this->respond($restaurants);
    }



    /**
     * @Route("/restaurants/sort/{sort}/search/{search}", name="restaurantsSortSearch")
     */
    public function restaurantsSortSearchAction($sort,$search)
    {
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->findByName($search);

        $restaurants = $this->processrestaurant($restaurants);

        return $this->respond($restaurants);
    }
    /**
     * @param string $sort
     *
     * @Route("/restaurants/sort/{sort}", name="restaurantsSort")
     */
    public function restaurantsSortAction($sort)
    {
        $restaurants = $this->getDoctrine()->getRepository(Restaurant::class)->allSort($sort);

        $restaurants = $this->processrestaurant($restaurants);

        return $this->respond($restaurants);
    }

    /**
     * @Route("/favourite/{id}", name="favouriteRestaurant")
     */
    public function favouriteRestaurantAction(Request $request, $id){
        $Restaurant = $this->getDoctrine()
            ->getRepository(Restaurant::class)
            ->find($id);
        if (!$Restaurant) {
            return $this->respondWithErrors('Restaurants not found!');
        }
        $Restaurant->setFav(true);
        $em = $this->getDoctrine()->getManager();
        $em->persist($Restaurant);
        $em->flush();
        return $this->redirectToRoute('dashboard');
        //return $this->respondWithSuccess('Successfully done');

    }

    /**
     * @Route("/unfavourite/{id}", name="unFavouriteRestaurant")
     */
    public function unFavouriteRestaurantAction(Request $request, $id){
        $Restaurant = $this->getDoctrine()
            ->getRepository(Restaurant::class)
            ->find($id);
        if (!$Restaurant) {
            return $this->respondWithErrors('Restaurant not found!');
        }
        $Restaurant->setFav(false);
        $em = $this->getDoctrine()->getManager();
        $em->persist($Restaurant);
        $em->flush();
        return $this->redirectToRoute('dashboard');
    }

    private function processrestaurant($restaurants,$topmatch = false){
        $output = [];

        if(!$restaurants){
            return $output;
        }


        foreach ($restaurants as $key => $restaurant){
            if($restaurant  instanceof Restaurant){

            }else{
                $restaurant = $restaurant[0];
            }

            $output[] = [
                'id' => $restaurant->getId() ,
                'name' => $restaurant->getName() ,
                'status' => $restaurant->getStatus() ,
                'bestMatch' => $restaurant->getBestMatch() ,
                'newest' => $restaurant->getNewest() ,
                'ratingAverage' => $restaurant->getRatingAverage() ,
                'distance' => $restaurant->getDistance() ,
                'popularity' => $restaurant->getPopularity() ,
                'averageProductPrice' => $restaurant->getAverageProductPrice() ,
                'deliveryCosts' => $restaurant->getDeliveryCosts() ,
                'minCost' => $restaurant->getMinCost() ,
                'favourite' => $restaurant->getFav() ,
            ];
        }

        return $output;
    }
}