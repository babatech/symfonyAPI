<?php

namespace App\Controller;

use App\Entity\Ads;
use App\Entity\Advertiser;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AdvertiserController
 * @package App\Controller
 */
class AdvertiserController extends ApiController
{
    /**
     * @param $advertiserID
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     * @Route("/advertiser/{advertiserID}", name="advertiserByID")
     */
    public function advertiserByIDAction($advertiserID)
    {
        $advertiser = $this->getDoctrine()->getRepository(Advertiser::class)->findByID($advertiserID);
        return $this->respond($advertiser);
    }

    /**
     * @param $advertiserID
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     * @Route("/advertiser/listads/{advertiserID}", name="advertiserAdsList")
     */
    public function advertiserAdsList($advertiserID)
    {
        $advertiserAds = $this->getDoctrine()->getRepository(Advertiser::class)->findTotalAdsByID($advertiserID);
        return $this->respond($advertiserAds);
    }
}