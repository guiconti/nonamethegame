export const CONSUMABLE = 'Consumable';
export const MISCELLANEOUS = 'Miscellaneous';
export const EQUIPMENT = 'Equipment';
export const CARD = 'Card';
export const CATEGORIES = [CONSUMABLE, MISCELLANEOUS, EQUIPMENT, CARD];
export const USE_OPTION = 'Use';
export const EQUIP_OPTION = 'Equip';
export const ATTACH_OPTION = 'Attach';
export const DROP_OPTION = 'Drop';
export const OPTIONS_PER_TYPE = {
  'consumable': [USE_OPTION, DROP_OPTION],
  'miscellaneous': [DROP_OPTION],
  'equipment': [EQUIP_OPTION, DROP_OPTION],
  'card': [ATTACH_OPTION, DROP_OPTION],
};