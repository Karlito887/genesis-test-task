import {CoursePreviewMetaInterface} from './course-preview-meta.interface';
import {LessonInterface} from './lesson.interface';

export interface CourseDetailedInterface {
  id: string;
  title: string;
  tags: string[],
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  previewImageLink: string;
  rating: number;
  meta: CoursePreviewMetaInterface
  lessons: LessonInterface[],
  containsLockedLessons: boolean;
}
