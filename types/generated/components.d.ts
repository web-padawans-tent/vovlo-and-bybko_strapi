import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBenefits extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits';
  info: {
    description: '';
    displayName: 'Benefits';
  };
  attributes: {
    list: Schema.Attribute.Component<'shared.list-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_infos';
  info: {
    displayName: 'Info';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SharedListContainer extends Struct.ComponentSchema {
  collectionName: 'components_shared_list-container';
  info: {
    displayName: 'List-Container';
  };
  attributes: {
    listItem: Schema.Attribute.Component<'shared.list-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list-item';
  info: {
    description: '';
    displayName: 'List-Item';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedMenuLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_links';
  info: {
    description: '';
    displayName: 'menu_links';
    icon: 'user';
  };
  attributes: {
    extraClass: Schema.Attribute.String;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    svg: Schema.Attribute.String;
  };
}

export interface SharedPriceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_price_cards';
  info: {
    displayName: 'PriceCard';
  };
  attributes: {
    deadlines: Schema.Attribute.String;
    descr: Schema.Attribute.String;
    price: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSteps extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    displayName: 'Steps';
  };
  attributes: {
    list: Schema.Attribute.Component<'shared.list-item', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.benefits': SharedBenefits;
      'shared.info': SharedInfo;
      'shared.list-container': SharedListContainer;
      'shared.list-item': SharedListItem;
      'shared.menu-links': SharedMenuLinks;
      'shared.price-card': SharedPriceCard;
      'shared.steps': SharedSteps;
    }
  }
}
