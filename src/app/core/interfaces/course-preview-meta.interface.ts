import {CourseVideoPreviewInterface} from './course-video-preview.interface';

export interface CoursePreviewMetaInterface {
  slug: string;
  skills: string[];
  courseVideoPreview: CourseVideoPreviewInterface;
}
