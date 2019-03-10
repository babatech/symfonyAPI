<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190306162202 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('CREATE TABLE ads (id INTEGER NOT NULL, title VARCHAR(255) DEFAULT NULL, text VARCHAR(255) DEFAULT NULL, image VARCHAR(255) DEFAULT NULL, sponsored_by VARCHAR(255) DEFAULT NULL, tracking_url VARCHAR(255) DEFAULT NULL, campaign_id INTEGER DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE advertiser (id INTEGER NOT NULL, name VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE campaign (id INTEGER NOT NULL, name VARCHAR(255) DEFAULT NULL, advertiser_id INTEGER DEFAULT NULL, PRIMARY KEY(id))');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('DROP TABLE ads');
        $this->addSql('DROP TABLE advertiser');
        $this->addSql('DROP TABLE campaign');
    }
}
