export interface IAsteroid {
  id: string;
  name: string;
  nasa_jpl_url: string;
  neo_reference_id: string;
  is_potentially_hazardous_asteroid: boolean;
  absolute_magnitude_h: number;
  close_approach_data: Array<{
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    miss_distance: {
      astronomical: string;
      kilometers: string;
      lunar: string;
      miles: string;
    }
    orbiting_body: string;
    relative_velocity: {
      kilometers_per_hour: string;
      kilometers_per_second: string;
      miles_per_hour: string;
    }
  }>;
  estimated_diameter: {
    feet: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
    kilometers: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
    meters: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
    miles: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
  }
  is_sentry_object: boolean;
  links: {
    self: string;
  }
}

export interface ILocalSate {
  dataFull: string;
  id: string;
  toggleDistanceLunar: string;
  name: string;
  distanceKilometers: string;
  distanceLunar: string;
  diameter: number;
  hazard: boolean;
}
