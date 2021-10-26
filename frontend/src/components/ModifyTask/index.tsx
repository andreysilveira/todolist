import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit"

const ModifyTask = () => {
  return (
    <div>
      <IconButton>
        <EditIcon aria-label="Modify task" />
      </IconButton>
    </div>
  );
};

export default ModifyTask;