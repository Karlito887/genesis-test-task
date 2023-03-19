import {CoursePreviewMetaInterface} from './course-preview-meta.interface';

export interface CoursePreviewInterface {
  id: string;
  title: string;
  tags: string[],
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  lessonsCount: number;
  containsLockedLessons: true,
  previewImageLink: string;
  rating: number;
  meta: CoursePreviewMetaInterface;
}
