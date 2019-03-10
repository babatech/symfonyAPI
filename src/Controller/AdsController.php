<?php

namespace App\Controller;

use App\Entity\Ads;
use Symfony\Component\Routing\Annotation\Route;


class AdsController extends ApiController
{
    /**
     * @Route("/ad/sample", name="adSample")
     */
    public function adSampleAction()
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
     * @Route("/ad/{adID}", name="adByID")
     */
    public function adByIDAction($adID)
    {
        $ad = $this->getDoctrine()->getRepository(Ads::class)->find($adID);
        return $this->respond($ad);
    }
}