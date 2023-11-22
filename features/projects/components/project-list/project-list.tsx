import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";

import { Alert } from "@features/ui";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError } = useGetProjects();

  if (isLoading) {
    return <div>Loading</div>;
  }

  /*
  The error message is displayed when the request fails.  
 
  'React Query will retry failed queries three times per default with exponential backoff'
  
*/
  if (isError) {
    return (
      <div>
        <Alert
          type="error"
          message="There was a problem while loading the project data"
        />
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
