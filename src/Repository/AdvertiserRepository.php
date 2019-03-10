<?php

namespace App\Repository;

use App\Entity\Ads;
use App\Entity\Advertiser;
use App\Entity\Campaign;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Advertiser|null find($id, $lockMode = null, $lockVersion = null)
 * @method Advertiser|null findOneBy(array $criteria, array $orderBy = null)
 * @method Advertiser[]    findAll()
 * @method Advertiser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AdvertiserRepository extends ServiceEntityRepository
{
    /**
     * AdvertiserRepository constructor.
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Advertiser::class);
    }

    /**
     *
     * @param int $advertiserID
     * @return mixed
     */
    public function findTotalAdsByID($advertiserID){
        return $this->createQueryBuilder('adv')
            ->select('ads.id, ads.title, ads.text, ads.image, ads.sponsoredBy, ads.trackingUrl')
            ->leftJoin(Campaign::class, 'c',  \Doctrine\ORM\Query\Expr\Join::WITH, 'adv.id =c.advertiserID ')
            ->leftJoin(Ads::class, 'ads',  \Doctrine\ORM\Query\Expr\Join::WITH, 'c.id =ads.campaignID ')
            ->where('adv.id = :advertiserID')
            ->andWhere('ads.id IS NOT NULL')
            ->setParameter('advertiserID', $advertiserID)
            ->groupBy('ads.id')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $advertiserID
     * @return mixed
     */
    public function findByID($advertiserID){
        return $this->createQueryBuilder('adv')
            ->select('adv.id, adv.name')
            ->andWhere('adv.id = :advertiserID')
            ->setParameter('advertiserID', $advertiserID)
            ->getQuery()
            ->getResult();
    }
}
