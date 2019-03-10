<?php

namespace App\Repository;

use App\Entity\Ads;
use App\Entity\Campaign;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Campaign|null find($id, $lockMode = null, $lockVersion = null)
 * @method Campaign|null findOneBy(array $criteria, array $orderBy = null)
 * @method Campaign[]    findAll()
 * @method Campaign[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CampaignRepository extends ServiceEntityRepository
{
    /**
     * CampaignRepository constructor.
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Campaign::class);
    }

    /**
     * @return mixed
     */
    public function findAllCampaignWithOutAds()
    {
        return $this->createQueryBuilder('c')
            ->select('c.id,c.name')
            ->leftJoin(Ads::class, 'ads',  \Doctrine\ORM\Query\Expr\Join::WITH, 'c.id =ads.campaignID ')
            ->where('ads.campaignID IS NULL')
            ->getQuery()
            ->getResult()
            ;
    }

    /**
     *
     * @param $advertiserID
     * @param $numberOfAds
     * @return mixed
     */
    public function findCampaignWithAdvertiserIDAndNumberOfAds($advertiserID,$numberOfAds )
    {

        return $this->createQueryBuilder('c')
                ->select('c.id,c.name, count(ads.campaignID) as number')
                ->leftJoin(Ads::class, 'ads',  \Doctrine\ORM\Query\Expr\Join::WITH, 'c.id =ads.campaignID ')
                ->where('c.advertiserID = :advertiserID')
                ->setParameter('advertiserID', $advertiserID)
                ->groupBy('c.id')
                ->having('number > '.$numberOfAds)
                ->getQuery()
                ->getResult()
            ;
    }

    /**
     * find campaign By ID
     * @param $campaignID
     * @return mixed
     */
    public function findByID($campaignID)
    {
        return $this->createQueryBuilder('c')
            ->select('c.id,c.name, count(ads.campaignID) as TotalAds')
            ->leftJoin(Ads::class, 'ads',  \Doctrine\ORM\Query\Expr\Join::WITH, 'c.id =ads.campaignID ')
            ->where('c.id = :campaignID')
            ->setParameter('campaignID', $campaignID)
            ->groupBy('c.id')
            ->getQuery()
            ->getResult();
    }
}
