export interface Service {
  title: string;
  title_calendar: string;
  link: string;
  time_init: Date;
  time_end: Date;
  description: string;
  blog: string;
  image: ImageFormats;
  day?: string;
  often?: string;
}

export interface Event extends Service {
  date_end: Date;
  date_init: Date;
}


export interface ResponseStrapi {
  data: StrapiData[];
  meta: {
    pagination: Pagination;
  }
}
export interface ImageFormats {
  large: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  thumbnail: ImageFormat;
}

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

interface OftenData {
  id: number;
  attributes: {
      uid: string;
  };
}

interface ImageData {
  id: number;
  attributes: {
      formats: ImageFormats;
  };
}

interface StrapiData {
  id: number;
  attributes: {
    title: string;
    title_calendar: string;
    slug: string;
    time_init: string;
    time_end: string;
    date_end: string;
    date_init: string;
    description: string;
    blog: string;
    day: string;
    image: {
        data: ImageData;
    };
    often: {
        data: OftenData;
    };
  }
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}



