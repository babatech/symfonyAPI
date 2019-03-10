<?php

namespace App\Repository;

use App\Entity\Ads;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Ads|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ads|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ads[]    findAll()
 * @method Ads[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AdsRepository extends ServiceEntityRepository
{
    /**
     * AdsRepository constructor.
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Ads::class);
    }

    /**
     * @param $adID
     * @return mixed
     */
    public function findByID($adID)
    {
        return $this->createQueryBuilder('a')
            ->select('a.id, a.title, a.text, a.image, a.sponsoredBy, a.trackingUrl')
            ->andWhere('a.id = :adID')
            ->setParameter('adID', $adID)
            ->getQuery()
            ->getResult();
    }
}
