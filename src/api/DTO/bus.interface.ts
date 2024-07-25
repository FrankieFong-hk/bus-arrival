export interface RouteList {
  co: string;
  route: string;
  bound: string;
  service_type: string;
  orig_en: string;
  orig_tc: string;
  orig_sc: string;
  dest_en: string;
  dest_tc: string;
  dest_sc: string;
  data_timestamp: string;
}

export interface StopList {
  stop: string;
  name_tc: string;
  name_en: string;
  name_sc: string;
  lat: string;
  long: string;
  data_timestamp: string;
}

export interface RouteStopList {
  co: string;
  route: string;
  bound: string;
  service_type: string;
  seq: Number;
  stop: string;
  data_timestamp: string;
}

export interface ETA {
  co: string;
  route: string;
  dir: string;
  service_type: string;
  seq: Number;
  stop: string;
  dest_en: string;
  dest_tc: string;
  dest_sc: string;
  eta_seq: Number;
  eta: string;
  rmk_en: string;
  rmk_tc: string;
  rmk_sc: string;
  data_timestamp: string;
}
