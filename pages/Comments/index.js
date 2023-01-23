/** @format */
import React from "react";
import { connect } from "react-redux";
import PostsList from "../api/PostsList";

export const index = props => {
	return (
		<div>
			<PostsList />
		</div>
	);
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
