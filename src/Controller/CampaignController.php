<?php

namespace App\Controller;

use App\Entity\Campaign;
use Symfony\Component\Routing\Annotation\Route;

class CampaignController extends ApiController
{
    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/campaign", name="campaign")
     */
    public function index()
    {
        return $this->render('campaign/index.html.twig', [
            'controller_name' => 'CampaignController',
        ]);
    }

    /**
     * @return Symfony\Component\HttpFoundation\JsonResponse
     * @Route("/campaign/withoutad", name="campaignwithoutad")
     */
    public function campaignWithOutAdAction()
    {
        $campaigns = $this->getDoctrine()->getRepository(Campaign::class)->findAllCampaignWithOutAds();
        return $this->respond([
            $campaigns
        ]);
    }

    /**
     * @param $advertiserID
     * @param $numberOfAds
     * @return Symfony\Component\HttpFoundation\JsonResponse
     * @Route("/campaign/{advertiserID}/{numberOfAds}", name="campaignWithAdvertiserIDAndNumberOfAds")
     */
    public function campaignWithAdvertiserIDAndNumberOfAdsAction($advertiserID,$numberOfAds)
    {
        $campaigns = $this->getDoctrine()->getRepository(Campaign::class)->findCampaignWithAdvertiserIDAndNumberOfAds($advertiserID,$numberOfAds);
        return $this->respond([
            $campaigns
        ]);
    }
}
