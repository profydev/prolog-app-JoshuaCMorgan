import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";

import { Alert } from "@features/ui";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError, refetch } = useGetProjects();

  if (isLoading) {
    return <div>Loading</div>;
  }

  /*
  The error message is displayed when the request fails.  
*/

  /*
  'React Query will retry failed queries three times per default with exponential backoff'
  So, check for data first.
*/
  if (data) {
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

  /*
  RQ gives us refetching capabilities with same params. 
*/
  if (isError) {
    return (
      <div>
        <Alert
          type="error"
          message="There was a problem while loading the project data"
          action={() => refetch()}
        />
      </div>
    );
  }
}
