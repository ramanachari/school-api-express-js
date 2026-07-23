export default class ClassModel {

    constructor(
        classId,
        className,
        section,
        teachers = [],
        students = []
    ) {
        this.classId = classId;
        this.className = className;
        this.section = section;
        this.teachers = teachers;
        this.students = students;
    }
}